module.exports = (sequelize, DataTypes) => {
	const Todos = sequelize.define('Todos', {
        title: DataTypes.STRING,
		description: DataTypes.STRING
	});

	Todos.associate = function(models) {
		Todos.hasMany(models.Comments)
	}

	return Todos;
};