
all:
	@echo Specify 'pull', 'config', 'install' or 'run'

pull:
	git pull

install:
	npm install -g

run:
	homebridge

