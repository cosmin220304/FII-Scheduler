const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const scraper = require('table-scraper');
const server = express();

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'build')));


server.get('/groups', async (req, res) => {
    try {
        const data = await scraper.get('https://profs.info.uaic.ro/~orar/participanti/')
        let groups = []
        for (let i = 1; i < data[0].length; i++) {
            const group = data[0][i].Name.split('.')[0].slice(5)
            groups.push(group)
        }
        res.send(groups)
    } catch (err) {
        console.log(err)
        res.status(200).send({
            success: "false"
        })
    }
});

server.post('/schedule', async (req, res) => {
    try {
        const { group } = req.body
        const data = await scraper.get(`https://profs.info.uaic.ro/~orar/participanti/orar_${group}.html`)
        res.send(data[0])
    } catch (err) {
        console.log(group, err)
        res.status(200).send({
            success: "false"
        })
    }
});


server.post('/courses', async (req, res) => {
    try {
        const { group } = req.body
        const data = await scraper.get(`https://profs.info.uaic.ro/~orar/participanti/orar_${group}.html`)

        let courseMap = {}
        for (let course of data[0]) {
            const type = course['Pachet'] === '' ? 'Compulsory' : `CO${course['Pachet']}`
            const name = course['Disciplina']
            if (!name) continue
            if (!courseMap[type]) {
                courseMap[type] = [name]
            } else if (!courseMap[type].includes(name)) {
                courseMap[type].push(name)
            }
        }

        res.send(courseMap)

    } catch (err) {
        console.log(group, err)
        res.status(200).send({
            success: "false"
        })
    }
});


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(process.env.PORT || 8000, console.log('Server started at port 8000'));