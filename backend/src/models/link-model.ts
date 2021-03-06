import Sequelize, { Model, Optional } from 'sequelize';
import { Link } from './link';
import database from '../database';

interface ILinkCreationAttributes extends Optional<Link, "id"> { }

export interface ILinkModel extends Model<Link, ILinkCreationAttributes>, Link { }

const linkModel = database.define<ILinkModel>('link', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    code: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
    },
    hits: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    }
})

export default linkModel;