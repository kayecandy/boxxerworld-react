import { useCallback, useEffect, useRef, useState } from "react";

import _config from "./_config";

import style from "./ControlsSummaryColors.module.scss";
import { Button, Col, Row } from "react-bootstrap";
import { useCurrentModelPart } from "../../../configurator/context/CurrentModelPartContext";
import { useCurrentModel } from "../../../configurator/context/CurrentModelContext";

export default function ControlsSummaryColors() {
  const [colors] = useState(_config);
  const [currentModel, setCurrentModel] = useCurrentModel();
  const [currentModelPart, setCurrentModelPart] = useCurrentModelPart();

  const [selectedCategory, setSelectedCategory] = useState();

  const [selectedColor, setSelectedColor] = useState();

  const currentModelPartMaterial = useRef();
  const currentModelPartSelectedMaterial = useRef();

  const getActiveColors = useCallback(() => {
    if (!selectedCategory)
      return {
        activeColors: [],
        activeSubcategories: [],
      };

    const activeColors = colors.colors.filter((color) =>
      color.categories.includes(selectedCategory.id)
    );

    const activeSubcategoriesId = [
      ...new Set(activeColors.map((color) => color.subcategories).flat()),
    ];

    const activeSubcategories = colors.subcategories.filter((subcategory) =>
      activeSubcategoriesId.includes(subcategory.id)
    );

    return {
      activeColors,
      activeSubcategories,
    };
  }, [colors, selectedCategory]);

  // Reset settings when selected part changes
  useEffect(() => {
    if (currentModelPart) {
      setSelectedColor(currentModelPart.selectedMaterial);

      setSelectedCategory(
        currentModelPart.selectedMaterial
          ? colors.categories.find(
              (color) =>
                color.id == currentModelPart.selectedMaterial.categories[0]
            )
          : colors.categories[0]
      );

      currentModelPartMaterial.current = currentModelPart.material;
      currentModelPartSelectedMaterial.current =
        currentModelPart.selectedMaterial;
    }
  }, [currentModelPart]);

  const { activeColors, activeSubcategories } = getActiveColors();

  function __onCategoryClick() {
    setSelectedCategory(this);
  }

  function __onColorClick() {
    setSelectedColor(this);

    if (this.material) currentModelPart.material = this.material;

    currentModelPart.selectedMaterial = this;

    setCurrentModel({ ...currentModel });
  }

  function __onColorCancel() {
    currentModelPart.material = currentModelPartMaterial.current;
    currentModelPart.selectedMaterial =
      currentModelPartSelectedMaterial.current;

    setCurrentModel(currentModel);
    setCurrentModelPart(false);
  }

  function __onColorSave() {
    setCurrentModelPart(false);
  }

  return (
    <div className={`${style.cndce_summary_colors}`}>
      <div className={`${style.cndce_summary_colors__wrapper} p-3`}>
        {/* Category */}
        <div className={style.cndce_summary_colors__category}>
          <div className={style.cndce_summary_colors__category_title}>
            Filter by colour
          </div>
          {colors.categories.map((category) => (
            <div
              key={category.id}
              className={`${style.cndce_summary_colors__category_item} m-1 ${
                selectedCategory == category ? "selected" : ""
              }`}
              style={{ backgroundColor: category.color }}
              onClick={__onCategoryClick.bind(category)}
            ></div>
          ))}
        </div>

        {/* Subcategories */}

        {!activeColors.length && (
          <div className="mt-3 fst-italic">No colors to show</div>
        )}

        {activeSubcategories.map((subcategory) => {
          const filteredColors = activeColors.filter((color) =>
            color.subcategories.includes(subcategory.id)
          );
          return (
            <div key={subcategory.id} className="mt-2">
              <div
                className={`${style.cndce_summary_colors__filtered_subcategory_name} mb-1 px-1`}
              >
                {subcategory.name}
              </div>

              <Row className="m-0">
                {filteredColors &&
                  filteredColors.map((color) => (
                    <Col
                      xs={6}
                      key={color.id}
                      className={`${
                        style.cndce_summary_colors__filtered_color
                      } px-1 ${
                        selectedColor && selectedColor.id == color.id
                          ? "color-selected"
                          : ""
                      }`}
                      onClick={__onColorClick.bind(color)}
                    >
                      <div
                        className={
                          style.cndce_summary_colors__filtered_color_img
                        }
                        style={color.style}
                      ></div>
                      <div
                        className={`${style.cndce_summary_colors__filtered_color_desc} text-center text-uppercase`}
                      >
                        {color.name}
                      </div>
                    </Col>
                  ))}
              </Row>
            </div>
          );
        })}
      </div>

      <div>
        <div className={`${style.cndce_summary__selected_details} py-2 px-3`}>
          <div>{currentModelPart.name}</div>

          <div>
            {selectedColor ? (
              selectedColor.name
            ) : (
              <span className="fst-italic">
                Select a material for this part
              </span>
            )}
          </div>
        </div>
        <Row className={`${style.cndce_summary__selected_actions} m-0`}>
          <Col className="p-0">
            <Button
              variant="secondary"
              className="w-100 py-2"
              onClick={__onColorCancel}
            >
              Cancel
            </Button>
          </Col>
          <Col className="p-0">
            <Button className="w-100 py-2" onClick={__onColorSave}>
              Save
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
