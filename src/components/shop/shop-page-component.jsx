import React from 'react';
import '../shop/shop-page.scss';
import {Route} from 'react-router-dom'
import CollectionOverview from '../collection-overview/collection-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({match}) => {
        return (
            <div className = 'shop-page'>
             < Route exact path={`${match.path}`}  component={CollectionOverview} />
             < Route  path={`${match.path}/:collectionId`}  component={CollectionPage} />
            </div>
        )
}

 
export default ShopPage;