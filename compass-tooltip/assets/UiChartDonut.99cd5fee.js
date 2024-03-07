import { as as defineComponent, ay as ref, aH as computed, at as resolveComponent, aw as openBlock, aB as createElementBlock, aC as createBaseVNode, aI as normalizeStyle, aM as toDisplayString, ax as createVNode } from "./vendor.9bb05c47.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiChartDonut",
  props: {
    dataGraph: { type: Object, required: true },
    labelTotalValue: { type: Number, required: true },
    series: { type: Array, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const chartOptions = ref({
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      colors: props.dataGraph.colors,
      states: {
        hover: {
          filter: {
            type: "none",
            value: 0
          }
        },
        active: {
          filter: {
            type: "none",
            value: 0
          }
        }
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                label: "",
                formatter: function() {
                  return "";
                },
                fontSize: "11px"
              }
            },
            size: "70%"
          }
        }
      }
    });
    const labelFormatted = computed(() => {
      const lengthLabelTotal = props.dataGraph.labelTotal.length;
      const part1 = props.dataGraph.labelTotal.slice(0, 10);
      let part2 = props.dataGraph.labelTotal.slice(11, lengthLabelTotal);
      if (part2.length > 9) {
        part2 = part2.slice(0, 6) + "...";
      }
      return part1 + "<br>" + part2;
    });
    const styleInsideGraph = computed(() => {
      const total = props.labelTotalValue;
      const areaToFill = 100 - total;
      const areaToFillInDeg = areaToFill * 3.6;
      let style = ` 
    border-radius: 50%;
    background: conic-gradient( 
      #F1F5F9 0deg ${areaToFillInDeg}deg,
      white ${areaToFillInDeg}deg 360deg
    );`;
      return style;
    });
    const __returned__ = { props, chartOptions, labelFormatted, styleInsideGraph };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "relative" };
const _hoisted_2 = { class: "absolute top-10 left-20" };
const _hoisted_3 = { class: "text-center" };
const _hoisted_4 = { class: "font-dm-sans font-bold text-3xl" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-xl" }, " % ", -1);
const _hoisted_6 = { class: "text-center" };
const _hoisted_7 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_apexchart = resolveComponent("apexchart");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: "absolute z-5 top-[30px] left-[62px] w-[110px] h-[110px]",
      style: normalizeStyle($setup.styleInsideGraph)
    }, null, 4),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("span", _hoisted_4, toDisplayString($setup.props.labelTotalValue), 1),
        _hoisted_5
      ]),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("span", {
          class: "font-dm-sans font-semibold text-sm",
          innerHTML: $setup.labelFormatted
        }, null, 8, _hoisted_7)
      ])
    ]),
    createVNode(_component_apexchart, {
      type: "donut",
      width: "228",
      options: $setup.chartOptions,
      series: $setup.props.series
    }, null, 8, ["options", "series"])
  ]);
}
_sfc_main.__file = "src/components/ui/UiChartDonut.vue";
const UiChartDonut = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiChartDonut.vue"]]);
export {
  UiChartDonut as U
};
