const express = require('express');
const app = express();
let port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World');
});


  
//we are telling express to read incomming parameter AS JSON
app.use(express.json());
app.post('/familytree', (req,res) => {
console.log(req.body.pratapsinghji);
console.log(req.body.pratapsinghji[0].son)
console.log(req.body.pratapsinghji[0].son.name)
console.log(req.body.pratapsinghji[0].son.spouse)
console.log(req.body.pratapsinghji[0].son.children[0].name)
console.log(req.body.pratapsinghji[0].son.children[1].name)
console.log(req.body.pratapsinghji[0].son.children[2].name)
console.log(req.body.pratapsinghji[0].son.children[3].name)
console.log(req.body.pratapsinghji[1])
console.log(req.body.pratapsinghji[1].daughter1)
console.log(req.body.pratapsinghji[1].daughter1.name)
console.log(req.body.pratapsinghji[1].daughter1.hus)
console.log(req.body.pratapsinghji[1].daughter1.child)
console.log(req.body.pratapsinghji[1].daughter1.child[0])
console.log(req.body.pratapsinghji[1].daughter1.child[0].name)
console.log(req.body.pratapsinghji[1].daughter1.child[1])
console.log(req.body.pratapsinghji[1].daughter1.child[1].name)
console.log(req.body.pratapsinghji[2])
console.log(req.body.pratapsinghji[2].daughter2)
console.log(req.body.pratapsinghji[2].daughter2.name)
console.log(req.body.pratapsinghji[2].daughter2.hus)
console.log(req.body.pratapsinghji[2].daughter2.child)
console.log(req.body.pratapsinghji[2].daughter2.child[0])
console.log(req.body.pratapsinghji[2].daughter2.child[0].name)
console.log(req.body.pratapsinghji[2].daughter2.child[1])
console.log(req.body.pratapsinghji[2].daughter2.child[1].name)
console.log(req.body.pratapsinghji[2].daughter2.child[2])
console.log(req.body.pratapsinghji[2].daughter2.child[2].name)
console.log(req.body.ravnvir_singh)
console.log(req.body.ravnvir_singh[0])
console.log(req.body.ravnvir_singh[1])
res.status(200).send({
  grandfather:req.body.pratapsinghji,
  father:req.body.pratapsinghji[0].son,

  father_sister1:req.body.pratapsinghji[1].daughter1,
  father_sister2:req.body.pratapsinghji[2].daughter2,
  another:req.body.ravnvir_singh,
  son:req.body.ravnvir_singh[0],
  son1:req.body.ravnvir_singh[1]
});
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});