var stores = ['Fareway', 'Ace Hardware', 'Caseys', 'The Hatchery', 'Amundsens']
var sections = ['Produce', 'Meats', 'Cereal', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Tools', 'Clothing']

var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)
var dataTable = new localstorageTable(shoppingModel,"brads")

function clickedon() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price', 'priority']
    let vals = {}
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
    }
    let it = new Item(vals.itemname, vals.qty, vals.priority, vals.store, vals.category, vals.price)
    shoppingModel.addItem(it)
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

function sortByCol(n) {
    let table, rows, switching, i,x,y, shouldswitch, dir, switchcount = 0;
    table = document.getElementById("ShoppingTable");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for ( i = 1; i < (rows.length - 1); i++) {
            shouldswitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldswitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldswitch = true;
                    break;
                }
            }
        }
        if (shouldswitch) {
            rows[i].parentNode.insertBefore(rows[i + 1],rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function checkmark(row) {
    let checkboxStat = document.getElementById('purchaseStat')
    if (checkboxStat.checked) {
        row.style.setProperty("text-decoration", "line-through")
    }else{
        row.style.setProperty("text-decoration", "none")
    }
    
}

$(document).ready(function () {
    populateSelect('store', stores)
    populateSelect('category', sections)
})