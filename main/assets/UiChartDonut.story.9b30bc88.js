import { aw as defineComponent, ax as ref, az as computed, aD as resolveComponent, ar as openBlock, as as createElementBlock, at as createBaseVNode, aK as normalizeStyle, aH as toDisplayString, aF as createVNode, aC as createBlock, aE as withCtx, aL as VueApexCharts } from "./vendor.44f302a2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiChartDonut",
  props: {
    dataGraph: { type: Object, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const series = ref(props.dataGraph.series);
    const chartOptions = ref({
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      labels: props.dataGraph.labels,
      colors: props.dataGraph.colors,
      plotOptions: {
        pie: {
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
      const total = parseInt(props.dataGraph.labelTotalValue);
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
    const __returned__ = { props, series, chartOptions, labelFormatted, styleInsideGraph };
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_apexchart = resolveComponent("apexchart");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: "absolute z-5 top-[30px] left-[67px] w-[100px] h-[110px]",
      style: normalizeStyle($setup.styleInsideGraph)
    }, null, 4),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("span", _hoisted_4, toDisplayString($setup.props.dataGraph.labelTotalValue), 1),
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
      series: $setup.series
    }, null, 8, ["options", "series"])
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiChartDonut.vue";
const UiChartDonut = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiChartDonut.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiChartDonut.story",
  setup(__props, { expose }) {
    expose();
    function mySetupApp({ app, story, variant }) {
      app.use(VueApexCharts);
    }
    const __returned__ = { mySetupApp, UiChartDonut };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiChartDonut",
    group: "ui-base",
    "setup-app": $setup.mySetupApp
  }, {
    default: withCtx(() => [
      createVNode($setup["UiChartDonut"], { dataGraph: {
        series: [35, 15, 5, 45],
        labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
        colors: ["#FEF08A", "#FEF9C3", "#CBD5E1", "#334155"],
        labelTotal: "Surface favorable",
        labelTotalValue: "50"
      } })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiChartDonut.story.vue";
const UiChartDonut_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiChartDonut.story.vue"]]);
export {
  UiChartDonut_story as default
};
