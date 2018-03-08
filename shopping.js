var stores = ['Fareway', 'Ace Hardware', 'Caseys', 'The Hatchery', 'Amundsens']
var sections = ['Produce', 'Meats', 'Cereal', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Tools', 'Clothing']

var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)

function clickedon() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price']
    let vals = []
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
        //vals.push(document.getElementById(cid).value)
    }
    let it = new Item(vals.itemname, vals.qty, vals.priority, vals.store, vals.section, vals.price)
    //makeRow(vals, document.getElementById('shoppinglist'))
}

function makeRow(valueList, parent) {
    let row = document.createElement("tr")
    row.classList.add(document.getElementById("priority").value)
    let cb = document.createElement("input")
    cb.type = "checkbox"
    cb.classList.add("form-control")
    row.appendChild(cb)
    
    for (let val of valueList) {
        let td = document.createElement("td")
        td.innerHTML = val
        row.appendChild(td)
    }
    parent.appendChild(row)
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList)
    for (let s of sList) {
        let opt = document.createElement("option")
        opt.value = s
        opt.innerHTML = s
        sel.appendChild(opt)
    }
}

$(document).ready(function () {
    populateSelect('store', stores)
    populateSelect('category', sections)
})
