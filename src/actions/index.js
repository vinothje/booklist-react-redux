export const ACTIVEBOOK = 'active_book';

export function selectBook(book) {
    console.log('book is ' + book.title);

    return {
        type: ACTIVEBOOK,
        payload: book
    }
}
