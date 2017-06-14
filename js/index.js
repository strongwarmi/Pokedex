'use strict';
const render = (root) => {
    root.empty();
    // Append components    
    root.append(Header());    
};

$( _ => {
    const root = $('.root');
    render(root);
});