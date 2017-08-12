import React, {Component} from 'react';

class Categories extends Component {
    
    clickHandler(category) {
        window.location.href=category.link;
    }

    render() {
        let list = this.props.categories.map((v, i) => {
            return (
                <div className='category-wrapper' key={i} onClick={this.clickHandler.bind(this, v)}>
                    <div className='icon'>
                        <img src={v.image}/>
                    </div>
                    <div className='brif'>
                        <div className='name'>{v.caption_en}</div>
                        <div className='description'>{v.description_en}</div>
                    </div>
                    <div className='clear'></div>
                </div>
            );
        });

        return (
            <div className='categories-container'>
                {list}
            </div>
        );
    }
}

export default Categories;