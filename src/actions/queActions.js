const NEXT = 'NEXT';
const PREV = 'PREV';


export function prevQue() {
    return {
        type: PREV,
    };
}
export function nextQue(index, id) {
    return {
        type: NEXT,
        index,
        id,
    };
}
