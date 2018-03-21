class ShoppingView {
    constructor(model) {
        // The bind() method creates a new function that, when called, has its this keyword set to the provided value.
        model.subscribe(this.redrawList.bind(this))
    }

    redrawList(shoppingList, msg) {
        let tbl = document.getElementById("shoppinglist")
        tbl.innerHTML = ""
        for (let item of shoppingList.newItems) {
            this.addRow(item, tbl)
        }
    }

    addRow(item, parent) {
        let row = document.createElement("tr")
        row.classList.add(item.priority)
        let cb = document.createElement("input")
        cb.id = "purchaseStat"
        cb.type = "checkbox"
        cb.classList.add("form-control")
        cb.onclick = function() {
            if (item.purchased == false) {
                item.purchased = true
                row.style.setProperty("text-decoration", "line-through")
            } else {
                item.purchased = false
                row.style.setProperty("text-decoration", "none")
            }
        }
        if (item.purchased) {
            cb.checked = true;
        }
        row.appendChild(cb)

        var currentItem = {};
        for (let val of ['name', 'quantity', 'store', 'section', 'price']) {
            let td = document.createElement("td")
            td.innerHTML = item[val]
            if (item.purchased == true) {
                td.classList.add('purchased')
            }
            row.appendChild(td)
        }
        
        parent.appendChild(row)
    }
}