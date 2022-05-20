const json = [
  {
    id: 1,
    name: "Billy Joel",
    children: [
      {
        id: 2,
        name: "Bobby Joel",
        children: [
          {
            id: 4,
            name: "Bobby Joel Jr.",
            children: null,
          },
        ],
      },
      {
        id: 3,
        name: "Sally Joel",
        children: null,
      },
    ],
  },
  {
    id: 5,
    name: "Henry Ford",
    children: [
      {
        id: 6,
        name: "Sonya Ford",
        children: null,
      },
    ],
  },
];

//const parsed = JSON.parse(json);

//console.log(json.data);
let map = new Map();
const print = (json) => {
  for (let i = 0; i < json.length; i++) {
    let item = {
      id: Number,
      name: String,
      children: [],
    };
    if (json[i] != null) {
      item.id = json[i].id;
      item.name = json[i].name;
      if (json[i].children != null) {
        for (let j = 0; j < json[i].children.length; j++) {
          item.children.push(json[i].children[j].id);
          map.set(json[i].id, item);
          print(json[i].children);
        }
      } else {
        item.children = null;
        map.set(json[i].id, item);
      }
    }
  }

  //return output;
};
print(json);
let output = Object.fromEntries(map);
console.log(output);
