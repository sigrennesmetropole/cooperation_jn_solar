import {
  AbstractInteraction,
  EventType,
  ModificationKeyType,
  PointerKeyType,
  type InteractionEvent,
} from '@vcmap/core'
import { Rectangle, Color, Math, StripeMaterialProperty } from '@vcmap/cesium'
import type { RennesApp } from '@/services/RennesApp'

class mapClickAndMoveInteraction extends AbstractInteraction {
  private _rennesApp: RennesApp

  constructor(rennesApp: RennesApp) {
    super(EventType.CLICKMOVE, ModificationKeyType.NONE, PointerKeyType.ALL)
    this._rennesApp = rennesApp
  }

  async pipe(event: InteractionEvent): Promise<InteractionEvent> {
    if (event.type & EventType.CLICK) {
      console.log(event)

      //cesium map getEntities
      //https://cesium.com/learn/cesiumjs/ref-doc/EntityCollection.html?classFilter=entityCol
      //https://sandcastle.cesium.com/?src=Geometry%20and%20Appearances.html

      const stripeMaterial = new StripeMaterialProperty({
        evenColor: Color.WHITE.withAlpha(0.5),
        oddColor: Color.BLUE.withAlpha(0.5),
        repeat: 5.0,
      })

      this._rennesApp
        .get3DMap()
        .getEntities()
        .add({
          rectangle: {
            coordinates: Rectangle.fromDegrees(-92.0, 20.0, -86.0, 27.0),
            outline: true,
            outlineColor: Color.WHITE,
            outlineWidth: 4,
            stRotation: Math.toRadians(45),
            material: stripeMaterial,
          },
        })
    }
    return event
  }
}

export default mapClickAndMoveInteraction
