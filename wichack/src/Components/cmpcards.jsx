import { ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react';
import { catagory } from '../../utils/catagories';
import { Link } from 'react-router-dom';

function CmpItem(props) {
    const image = require(`../../${props.catagory.url}`);

    return (
        <Link className='CatagoryItem' to={props.catagory.name}>
            <ImageListItem>
                <img className='categitem'
                    src={`${image}?w=248&fit=crop&auto=format`}
                    srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={props.catagory.name}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={props.catagory.name}
                />
            </ImageListItem>
        </Link>
    );
}

export default CmpItem;