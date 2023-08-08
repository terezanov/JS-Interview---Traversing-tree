const tree = {
  value: 1,
  children: [
    {
      value: 2,
    },
    {
      value: 3,
      children: [
        {
          value: 4,
          children: [
            {
              value: 5,
            },
            {
              value: 6,
            },
          ],
        },
      ],
    },
  ],
};

function getValues() {
  let result = [];
  return function v(t) {
    if (t.value) {
      result.push(t.value);
    }
    if (t.children) {
      t.children.forEach(v);
    }
    return result;
  };
}

let r = getValues()(tree);

console.log(r);
