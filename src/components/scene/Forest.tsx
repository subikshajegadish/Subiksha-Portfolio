import { Fragment } from 'react';
import { TREE_LAYERS } from '../../data/scene/trees';
import { timingStyle } from './timing';

/** Rolling hills with rows of swaying pines, back to front. */
export function Forest() {
  return TREE_LAYERS.map((layer) => (
    <Fragment key={layer.color}>
      <path fill={layer.color} d={layer.hill} />
      <g fill={layer.color} style={{ '--sway': `${layer.sway}deg` }}>
        <path d={layer.band} />
        {layer.trees.map((tree, i) => (
          <g key={i} className="t" style={timingStyle(tree)}>
            <path d={tree.d} />
          </g>
        ))}
      </g>
    </Fragment>
  ));
}
