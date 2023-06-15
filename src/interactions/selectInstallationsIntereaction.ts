// import {
//   AbstractInteraction,
//   EventType,
//   ModificationKeyType,
//   PointerKeyType,
//   type InteractionEvent,
// } from '@vcmap/core'
// import type { RennesApp } from '@/services/RennesApp'
// import type { Feature, Point } from '@turf/turf'
// import { useViewsStore } from '@/stores/views'
// import { useInstallationsStore } from '@/stores/installations'
// import { displaySolarInstallations } from '@/services/installationService'
// import { RENNES_LAYER } from '@/stores/layers'

// class installationLayerInteraction extends AbstractInteraction {
//   private _rennesApp: RennesApp

//   constructor(rennesApp: RennesApp) {
//     super(EventType.CLICKMOVE, ModificationKeyType.NONE, PointerKeyType.ALL)
//     this._rennesApp = rennesApp
//   }

//   _interactionInstallation(event: InteractionEvent) {
//     const viewStore = useViewsStore()
//     if (viewStore.currentView === viewStore.currentView) {
//       const installationsStore = useInstallationsStore()
//       const feature: Feature<Point> = event.feature as Feature<Point>
//       displaySolarInstallations(installationsStore.currentFeatureInstallation)
//     }
//   }

//   async pipe(event: InteractionEvent): Promise<InteractionEvent> {
//     const isFeatureInstallations =
//       event.feature?.[vcsLayerName] === RENNES_LAYER.installations
//     this._interactionInstallation(event)

//     return event
//   }
// }

// export default installationLayerInteraction
