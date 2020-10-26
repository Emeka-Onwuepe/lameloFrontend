const res = {
    data: [{ id: 1, buyer: "uche" }, { id: 2, buyer: "Arinze" }, { id: 3, buyer: "KIngsley" }, { id: 4, buyer: "nonso" },
        { id: 5, buyer: "peace" }, { id: 6, buyer: "nk" }, { id: 7, buyer: "ifeoma" }, { id: 8, buyer: "nwando" }
    ]
}

const Orders = [{ id: 4, buyer: "nonso" },
    { id: 5, buyer: "peace" }, { id: 6, buyer: "nk" }, { id: 7, buyer: "ifeoma" }, { id: 8, buyer: "nwando" }
]


let newOrder = []
res.data.forEach(element => {
    const check = Orders.filter(item => item.id == element.id)
    if (check.length == 0) {
        newOrder.push(element)
    }
});
console.log(newOrder)