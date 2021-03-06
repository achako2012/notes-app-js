import {archiveIcon, deleteIcon, editIcon, saveIcon} from "../shared-elements/icons";

export const getRandomDigit = () => Math.floor(Math.random() * 9999 + 1);

export const renderTableRow = (row) => {
    if (row.isEditing) {
        return `<tr>
            <td><input type="text" name="name" placeholder="name"></td>
            <td><input type="text" name="created" placeholder="created"></td>
            <td>
                <select name="category">
                    <option value="Idea">Idea</option>
                    <option value="Task" selected>Task</option>
                    <option value="Quote">Quote</option>
                    <option value="Random thought">Random thought</option>
                </select>
            </td>
            <td><input type="text" name="content" placeholder="content"></td>
            <td><input type="text" name="dates" placeholder="dates"></td>
            <td>
                <div id=${'' + row.id} class="note-buttons d-flex justify-content-between">
                    <div id="saveBtn">${saveIcon}</div>
                    <div id="archiveBtn">${archiveIcon}</div>
                    <div id="deleteBtn">${deleteIcon}</div>
                </div>
            </td>
        </tr>`
    }

    return `<tr>
            <th scope="row">${row.name}</th>
            <td>${row.created}</td>
            <td>${row.category}</td>
            <td>${row.content}</td>
            <td>${row.dates}</td>
            <td>
                <div id=${'' + row.id} class="note-buttons d-flex justify-content-between">
                    <div id="editBtn">${editIcon}</div>
                    <div id="archiveBtn">${archiveIcon}</div>
                    <div id="deleteBtn">${deleteIcon}</div>
                </div>
            </td>
        </tr>`
}

export const countCategories = (arr, searchKey) => {
    const reducer = (accumulator, currentValue) => {
        if (currentValue.category === searchKey) {
            if (currentValue.status === 'Active') {
                accumulator.active += 1;
            } else {
                accumulator.archived += 1;
            }
        }
        return accumulator;
    };

    return arr.reduce(reducer, {active: 0, archived: 0});
};

export const renderStats = (element, values) => {
    const {active, archived} = Object.values(values)[0]

    element.querySelector('[data-id="active"]').textContent = active
    element.querySelector('[data-id="archived"]').textContent = archived
}

