dev:
	docker-compose down
	docker volume rm ventupapi-mock-server_node_modules
	docker-compose build --no-cache
	docker-compose up server
