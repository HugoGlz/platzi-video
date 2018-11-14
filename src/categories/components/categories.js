import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
	  {
	  	props.search.map( item => {
	  		return <Media {...item.toJS()} key={item.get('id')} openModal={props.handleOpenModal}/>
	  	})
	  }
      {
        props.categories.map( item =>{
          return (
            <Category
              key={item.get('id')}
			  description={item.get('description')}
			  title={item.get('title')}
			  playlist={item.get('playlist')}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
