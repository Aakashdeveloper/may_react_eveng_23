import axios from 'axios';

import {
    LATEST_NEWS,
    ARTICLE_NEWS,
    GALLERY_NEWS
} from '../redux/newsData/actionType';


const base_url = "http://localhost:7600";

export const getLatestNews = () => {
    return dispatch => {
        dispatch({
            type:LATEST_NEWS,
            payload:{data:[]}
        })
        return axios.get(`${base_url}/articles?_end=3`).then((response) => {
            const respData = response.data;
            dispatch({
                type:'LATEST_NEWS',
                payload:{data:respData}
            })
        })
    }
}

export const getArticleNews = () => {
    return dispatch => {
        dispatch({
            type:ARTICLE_NEWS,
            payload:{data:[]}
        })
        return axios.get(`${base_url}/articles?_start=3&_end=10`).then((response) => {
            const respData = response.data;
            dispatch({
                type:'ARTICLE_NEWS',
                payload:{data:respData}
            })
        })
    }
}

export const getGalleryNews = () => {
    return dispatch => {
        dispatch({
            type:GALLERY_NEWS,
            payload:{data:[]}
        })
        return axios.get(`${base_url}/galleries?_limit=5`).then((response) => {
            const respData = response.data;
            dispatch({
                type:'GALLERY_NEWS',
                payload:{data:respData}
            })
        })
    }
}