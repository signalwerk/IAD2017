# gatsby-starter-signalwerk
The signalwerk Gatsby starter

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-starter-signalwerk
```


## First steps
In `config.toml` change the Link-Prefix to the name of your repo.


## Travis CI

# generate a new SSH key
no passphrase
```
cd util/
ssh-keygen -t rsa -b 4096 -C "sh@signalwerk.ch" -f "./deploy_key"

```

# enctryp ssh key
```
travis encrypt-file deploy_key
```
fill in `.travis.yml` the variable key


# add deploy key in github
In the Github Repo add the pub-key to the Deploy keys. (Settings)
