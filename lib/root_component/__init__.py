import os

import streamlit.components.v1 as components

_RELEASE = False

if not _RELEASE:
    _component_func = components.declare_component(
        "root_component",
        url="http://localhost:5300",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/dist/browser")
    _component_func = components.declare_component(
        "root_component",
        path=build_dir
    )

def root_component(data, key=None) -> dict[str, str]:
    component_value = _component_func(data=data, key=key, default=0)
    return component_value
