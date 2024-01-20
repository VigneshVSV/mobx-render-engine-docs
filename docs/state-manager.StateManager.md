# Class: StateManager

[state-manager](../wiki/state-manager).StateManager

Main object to manage application state for a single application,webpage or dashboard, 
it composes a renderer, an action dispatcher, a component state map and a component output map. 
Use `createStateManager()` method to instantiate this object with default settings. 
Call `updateComponents()` and `updateActions()` with [JSON specification](https://www.google.com) 
to create component states and actions. Read [quickstart](https://www.google.com) or implementation of 
[mui-mobx-render-engine](https://github.com/VigneshVSV/mui-render-engine) 
or [hololinked-dashboard-components](https://github.com/VigneshVSV/hololinked-dashboard-components) for examples

## Table of contents

### Constructors

- [constructor](../wiki/state-manager.StateManager#constructor)

### Properties

- [\_componentOutputMap](../wiki/state-manager.StateManager#_componentoutputmap)
- [\_componentStateMap](../wiki/state-manager.StateManager#_componentstatemap)
- [\_remoteFSMMap](../wiki/state-manager.StateManager#_remotefsmmap)
- [actionDispatcher](../wiki/state-manager.StateManager#actiondispatcher)
- [id](../wiki/state-manager.StateManager#id)
- [logger](../wiki/state-manager.StateManager#logger)
- [renderer](../wiki/state-manager.StateManager#renderer)
- [stubEvaluator](../wiki/state-manager.StateManager#stubevaluator)
- [stubResolver](../wiki/state-manager.StateManager#stubresolver)

### Accessors

- [componentOutputMap](../wiki/state-manager.StateManager#componentoutputmap)
- [componentStateMap](../wiki/state-manager.StateManager#componentstatemap)
- [remoteFSMMap](../wiki/state-manager.StateManager#remotefsmmap)
- [resolvedActions](../wiki/state-manager.StateManager#resolvedactions)

### Methods

- [\_getDynamicFieldsWithProvidersForGivenObject](../wiki/state-manager.StateManager#_getdynamicfieldswithprovidersforgivenobject)
- [\_resolveDynamicObj](../wiki/state-manager.StateManager#_resolvedynamicobj)
- [addOrModifyComponentState](../wiki/state-manager.StateManager#addormodifycomponentstate)
- [createComponentState](../wiki/state-manager.StateManager#createcomponentstate)
- [deleteActions](../wiki/state-manager.StateManager#deleteactions)
- [deleteComponents](../wiki/state-manager.StateManager#deletecomponents)
- [forceUpdateDependents](../wiki/state-manager.StateManager#forceupdatedependents)
- [getDynamicDataProviders](../wiki/state-manager.StateManager#getdynamicdataproviders)
- [load](../wiki/state-manager.StateManager#load)
- [reset](../wiki/state-manager.StateManager#reset)
- [store](../wiki/state-manager.StateManager#store)
- [updateActions](../wiki/state-manager.StateManager#updateactions)
- [updateComponents](../wiki/state-manager.StateManager#updatecomponents)

## Constructors

### constructor

• **new StateManager**(`id`, `logger`, `componentStateMap`, `componentOutputMap`, `remoteFSMMap`, `errorBoundary`, `hooks?`): [`StateManager`](../wiki/state-manager.StateManager)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | an id for the state manager, used for logging |
| `logger` | [`Logger`](../wiki/utils.logger.Logger) | instance of mobx-render-enginer/utils/Logger |
| `componentStateMap` | [`ComponentStateMap`](../wiki/state-container#componentstatemap) | object (can be empty) |
| `componentOutputMap` | [`ComponentOutputMap`](../wiki/stub-evaluator#componentoutputmap) | object (can be empty) |
| `remoteFSMMap` | [`RemoteFSMMap`](../wiki/state-machine#remotefsmmap) | object (can be empty) |
| `errorBoundary` | `ReactElement`\<`ErrorBoundaryProps`, `string` \| `JSXElementConstructor`\<`any`\>\> | component rendered if there is an error (should accept 'message', 'submessage' and 'goBack' location router function) |
| `hooks` | `Hooks` | pass setLocation (relative), setGlobalLocation |

#### Returns

[`StateManager`](../wiki/state-manager.StateManager)

#### Defined in

[src/state-manager.tsx:66](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L66)

## Properties

### \_componentOutputMap

• **\_componentOutputMap**: `object`

#### Defined in

[src/state-manager.tsx:47](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L47)

___

### \_componentStateMap

• **\_componentStateMap**: [`ComponentStateMap`](../wiki/state-container#componentstatemap)

#### Defined in

[src/state-manager.tsx:46](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L46)

___

### \_remoteFSMMap

• **\_remoteFSMMap**: [`RemoteFSMMap`](../wiki/state-machine#remotefsmmap)

#### Defined in

[src/state-manager.tsx:48](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L48)

___

### actionDispatcher

• **actionDispatcher**: [`ActionDispatcher`](../wiki/state-manager.ActionDispatcher)

#### Defined in

[src/state-manager.tsx:52](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L52)

___

### id

• **id**: `string`

#### Defined in

[src/state-manager.tsx:49](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L49)

___

### logger

• **logger**: [`Logger`](../wiki/utils.logger.Logger)

#### Defined in

[src/state-manager.tsx:50](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L50)

___

### renderer

• **renderer**: [`RenderEngine`](../wiki/index.RenderEngine)

#### Defined in

[src/state-manager.tsx:51](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L51)

___

### stubEvaluator

• **stubEvaluator**: [`StubEvaluator`](../wiki/stub-evaluator.StubEvaluator)

#### Defined in

[src/state-manager.tsx:53](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L53)

___

### stubResolver

• **stubResolver**: `any`

#### Defined in

[src/state-manager.tsx:54](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L54)

## Accessors

### componentOutputMap

• `get` **componentOutputMap**(): [`ComponentOutputMap`](../wiki/stub-evaluator#componentoutputmap)

#### Returns

[`ComponentOutputMap`](../wiki/stub-evaluator#componentoutputmap)

#### Defined in

[src/state-manager.tsx:127](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L127)

• `set` **componentOutputMap**(`value`): `void`

one time set object with key-value pairs of component html id and 
its value (say for input elements like textfield, checkbox etc.)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `object` |

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:101](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L101)

___

### componentStateMap

• `get` **componentStateMap**(): [`ComponentStateMap`](../wiki/state-container#componentstatemap)

#### Returns

[`ComponentStateMap`](../wiki/state-container#componentstatemap)

#### Defined in

[src/state-manager.tsx:123](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L123)

• `set` **componentStateMap**(`value`): `void`

one time set object with key-value pairs of component html id and ComponentState

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| [`ComponentStateMap`](../wiki/state-container#componentstatemap) |

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:88](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L88)

___

### remoteFSMMap

• `get` **remoteFSMMap**(): [`RemoteFSMMap`](../wiki/state-machine#remotefsmmap)

#### Returns

[`RemoteFSMMap`](../wiki/state-machine#remotefsmmap)

#### Defined in

[src/state-manager.tsx:131](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L131)

• `set` **remoteFSMMap**(`value`): `void`

one time set object with key-value pairs of a hololinked.server.RemoteObject 
and its state machine state. Not useful for applications outside hololinked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| [`RemoteFSMMap`](../wiki/state-machine#remotefsmmap) |

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:114](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L114)

___

### resolvedActions

• `get` **resolvedActions**(): [`Action`](../wiki/state-manager.Action)[]

#### Returns

[`Action`](../wiki/state-manager.Action)[]

#### Defined in

[src/state-manager.tsx:456](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L456)

## Methods

### \_getDynamicFieldsWithProvidersForGivenObject

▸ **_getDynamicFieldsWithProvidersForGivenObject**(`data`): `Object`

called for props, state machine and children objects to find props or children which
are supposed to be dynamically generated from values of other components (for example, input components
like checkbox and slider). calls _resolveDynamicObj internally.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | key-value pairs/object |

#### Returns

`Object`

list of dynamic fields within that object and the providers of data for them.

| Name | Type |
| :------ | :------ |
| `dynamicFields_` | `string`[] |
| `providers_` | `string`[] |

#### Defined in

[src/state-manager.tsx:190](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L190)

___

### \_resolveDynamicObj

▸ **_resolveDynamicObj**(`data`): `string`[]

finds the data providers for a dynamic prop, here resolve means 'find what provides it'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | dynamic object data (contains fields op1, op1dtype, op1interpretation among others ) |

#### Returns

`string`[]

a list of providers (html ids of data providers and actions ids whose return value matter)

#### Defined in

[src/state-manager.tsx:159](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L159)

___

### addOrModifyComponentState

▸ **addOrModifyComponentState**(`id`, `state`, `added?`, `reset?`): `void`

creates or modifies a ComponentState. calls setComponentData MobX action on ComponentState.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | html-id of component for which a state has to be created or modified |
| `state` | [`ComponentData`](../wiki/state-container#componentdata) \| [`PlotlyComponentData`](../wiki/state-container#plotlycomponentdata) \| [`VideoComponentData`](../wiki/state-container#videocomponentdata) | `undefined` | object containing state information |
| `added` | ``null`` \| `string`[] | `null` | a list into which html-id is added if created freshly (optional) |
| `reset` | ``null`` \| `string`[] | `null` | a list into which html-id is added if component already existed (optional) |

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:327](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L327)

___

### createComponentState

▸ **createComponentState**(`data`): [`ComponentState`](../wiki/state-container.ComponentState)

creates component state from data, used updateComponents() when componentStateMap does not have a ComponentState
for a specific html-id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ComponentData`](../wiki/state-container#componentdata) \| [`PlotlyComponentData`](../wiki/state-container#plotlycomponentdata) \| [`VideoComponentData`](../wiki/state-container#videocomponentdata) | object containing the state data |

#### Returns

[`ComponentState`](../wiki/state-container.ComponentState)

ComponentState (implementor of makeObservable) or its child class

#### Defined in

[src/state-manager.tsx:141](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L141)

___

### deleteActions

▸ **deleteActions**(): `void`

delete the internal actions map within stub evaluator

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:451](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L451)

___

### deleteComponents

▸ **deleteComponents**(): `void`

delete the component state map

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:432](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L432)

___

### forceUpdateDependents

▸ **forceUpdateDependents**(`dependents`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependents` | `undefined` \| ``null`` \| `string`[] |

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:472](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L472)

___

### getDynamicDataProviders

▸ **getDynamicDataProviders**(`componentData`): `string`[]

finds dynamicProps and dynamicChildren - props and children to be dynamically 
generated from values of other components (for example, input components like checkbox and slider)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentData` | [`ComponentData`](../wiki/state-container#componentdata) \| [`PlotlyComponentData`](../wiki/state-container#plotlycomponentdata) | object containing component data |

#### Returns

`string`[]

list of data providers for dynamicProps or dynamicChildren

#### Defined in

[src/state-manager.tsx:251](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L251)

___

### load

▸ **load**(`server`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/state-manager.tsx:501](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L501)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:510](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L510)

___

### store

▸ **store**(`server`, `components`, `actions`, `storeAsLastUsed?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `server` | `string` | `undefined` |
| `components` | `any` | `undefined` |
| `actions` | `any` | `undefined` |
| `storeAsLastUsed` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:482](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L482)

___

### updateActions

▸ **updateActions**(`data`): `void`

add all action JSON specifications to an internal map of stub evaluator which resolves it (the JSON stub
or specification) into a function. call this method before calling updateComponents().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ActionsMap`](../wiki/stub-evaluator#actionsmap) | key-value pairs/object |

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:442](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L442)

___

### updateComponents

▸ **updateComponents**(`data`, `callerID?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `callerID` | `string` | `''` |

#### Returns

`void`

#### Defined in

[src/state-manager.tsx:358](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/state-manager.tsx#L358)
