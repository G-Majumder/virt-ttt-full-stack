import React, { useState } from "react";

interface TODO {
    id: number;
    itemName: string;
}

interface Props {
    todo: TODO;
    onDelete: (id: number) => void;
    onUpdate: (id: number, newItemName: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editItemName, setEditItemName] = useState(todo.itemName);

    const handleSave = () => {
        onUpdate(todo.id, editItemName);
        setIsEditing(false);
    };

    return (
        <li style={{ marginBottom: '10px' }}>
            {isEditing ? (
                <>
                    <input
                        value={editItemName}
                        onChange={e => setEditItemName(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span>{todo.itemName}</span>
                    <button onClick={() => setIsEditing(true)} style={{ marginLeft: '10px' }}>Edit</button>
                    <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '5px' }}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;