import { observer } from 'mobx-react';
import * as React from 'react';
import { MilitaryUnit } from '../../game/types/military-unit.type';
export const UnitInfo_C = observer(
  ({militaryUnit}: {militaryUnit: MilitaryUnit}) => {
    const {commandingOfficers, echelonName, madeUpOf} = militaryUnit
  return (
    <unit-info class='container'>
      <t-row>
        <t-label>Unit</t-label>
        <t-data>{echelonName}</t-data>
      </t-row>
      <t-row>
        <t-label>Commanding Officer</t-label>
        <t-data>{commandingOfficers[0]?.name}</t-data>
      </t-row>
      <t-row>
        <t-label>Officer Rank</t-label>
        <t-data>{commandingOfficers[0]?.rankName}</t-data>
      </t-row>
      <t-container>
        <t-heading>Made up of</t-heading>
        {madeUpOf.map(({id, echelonName,commandingOfficers}) =>
          <sub-unit key={id}>
            <t-row>
              <t-label>Unit</t-label>
              <t-data>{echelonName}</t-data>
            </t-row>
            <t-row>
              <t-label>Commanding Officer</t-label>
              <t-data>{commandingOfficers[0]?.name}</t-data>
            </t-row>
          </sub-unit>
        )}
      </t-container>
    </unit-info>
)
})