# Class: RenderEngine

[index](../wiki/index).RenderEngine

Checks if supplied html-id has a defined component state and renders it with that 
state if possible. RenderEngine keeps a map of allowed components which can be 
registered using `registerComponent()`. For a given html-id, it retrives the component from the map, 
and passes the MobX state while rendering. Additional errors while rendering can be shown using error boundary.

## Table of contents

### Constructors

- [constructor](../wiki/index.RenderEngine#constructor)

### Properties

- [\_lastError](../index.RenderEngine#_lasterror)
- [\_stopRendering](../index.RenderEngine#_stoprendering)
- [componentStateMap](../index.RenderEngine#componentstatemap)
- [components](../index.RenderEngine#components)
- [errorBoundary](../index.RenderEngine#errorboundary)
- [id](../index.RenderEngine#id)
- [logger](../index.RenderEngine#logger)
- [setGlobalLocation](../index.RenderEngine#setgloballocation)
- [stateManager](../index.RenderEngine#statemanager)

### Methods

- [Children](../index.RenderEngine#children)
- [Component](../index.RenderEngine#component)
- [deregisterComponent](../index.RenderEngine#deregistercomponent)
- [isCapable](../index.RenderEngine#iscapable)
- [registerComponent](../index.RenderEngine#registercomponent)

## Constructors

### constructor

• **new RenderEngine**(`id`, `logger`, `stateManager`, `componentStateMap`, `setGlobalLocation`, `errorBoundary`): [`RenderEngine`](../index.RenderEngine)

Creates a new RenderEngine. For each application, normally one is sufficient.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the render engine, used for logging |
| `logger` | [`Logger`](../wiki/utils.logger.Logger) | instance of mobx-render-engine/utils/Logger or similar |
| `stateManager` | `any` | parent state manager that owns the render engine, automatically assigned when createStateManager is used |
| `componentStateMap` | [`ComponentStateMap`](../wiki/state-container#componentstatemap) | html-id to ComponentState map |
| `setGlobalLocation` | (`absolutePath`: `string`) => `void` | gives error boundary a way to return to the calling page |
| `errorBoundary` | `Element` | component that is displayed when error occured while rendering the components |

#### Returns

[`RenderEngine`](../wiki/index.RenderEngine)

#### Defined in

[src/index.tsx:50](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L50)

## Properties

### \_lastError

• **\_lastError**: `string`

#### Defined in

[src/index.tsx:38](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L38)

___

### \_stopRendering

• **\_stopRendering**: `boolean`

#### Defined in

[src/index.tsx:37](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L37)

___

### componentStateMap

• **componentStateMap**: [`ComponentStateMap`](../wiki/state-container#componentstatemap)

#### Defined in

[src/index.tsx:32](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L32)

___

### components

• **components**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/index.tsx:33](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L33)

___

### errorBoundary

• **errorBoundary**: `Element`

#### Defined in

[src/index.tsx:36](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L36)

___

### id

• **id**: `string`

#### Defined in

[src/index.tsx:30](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L30)

___

### logger

• **logger**: [`Logger`](../wiki/utils.logger.Logger)

#### Defined in

[src/index.tsx:31](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L31)

___

### setGlobalLocation

• **setGlobalLocation**: `any`

#### Defined in

[src/index.tsx:34](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L34)

___

### stateManager

• **stateManager**: `any`

#### Defined in

[src/index.tsx:35](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L35)

## Methods

### Children

▸ **Children**(`children`): `ReactNode`

render an array of components using the array of html-ids. Mainly useful for rendering children.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `children` | ``null`` \| `string`[] | array of html-ids |

#### Returns

`ReactNode`

array of react nodes within a react fragment

#### Defined in

[src/index.tsx:173](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L173)

___

### Component

▸ **Component**(`id`): `ReactNode`

renders component specified by html-id. If state is not found, tries to render 
it plain (like numbers, strings etc.). Stops rendering if encountered with 
error while rendering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | html-id of a specific component whose JSX needs to be returned |

#### Returns

`ReactNode`

react node

#### Defined in

[src/index.tsx:70](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L70)

___

### deregisterComponent

▸ **deregisterComponent**(`name`): `void`

remove an existing renderable component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | remove a registered component with given name. No effect when name does not exist |

#### Returns

`void`

#### Defined in

[src/index.tsx:151](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L151)

___

### isCapable

▸ **isCapable**(`name`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | check if a given name is already registered |

#### Returns

`boolean`

true if capable

#### Defined in

[src/index.tsx:162](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L162)

___

### registerComponent

▸ **registerComponent**(`name`, `component`, `replace?`): `void`

supply a new component to be made available for rendering

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | unqiue name |
| `component` | `any` | `undefined` | component |
| `replace` | `boolean` | `false` | replace when true if another component was registered with same name |

#### Returns

`void`

**`Throws`**

if replace is false and a component was already registered with given name

#### Defined in

[src/index.tsx:140](https://github.com/VigneshVSV/mobx-render-engine/blob/6925d49/src/index.tsx#L140)
