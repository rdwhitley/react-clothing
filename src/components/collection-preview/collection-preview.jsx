import React from 'react';
import CollectionItem from '../collection-item/collection-item.jsx';

import './collection-preview.scss';

const CollectionPreview = ({title,items}) => {
  return(
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.filter((id,idx) => idx < 4).map(({id,...otherItemProps}) => (
          <CollectionItem id={id} {...otherItemProps}/>
        ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview;