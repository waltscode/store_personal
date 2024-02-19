const router = require('express').Router();
const {User, Product, Category, ProductTag} = require('../models');
const withAuth = require('../utils/auth');