import express from 'express';
import axios from 'axios';

export const home = async (req, res) => {
    try {
        return res.render('index.ejs');
    }catch(err) {
        console.log(err);
    }
};
