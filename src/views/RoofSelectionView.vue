<script setup lang="ts">
import { useViewsStore } from '@/stores/views'
import { onBeforeMount } from 'vue'
import { viewList } from '@/model/views.model'
import { usePanelsStore } from '@/stores/panels'

const viewStore = useViewsStore()
const panelsStore = usePanelsStore()

onBeforeMount(async () => {
  viewStore.setCurrentView(viewList['roof-selection'])
  panelsStore.toggleInformationPanel()
})
</script>