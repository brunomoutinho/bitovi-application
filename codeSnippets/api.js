export const api = `/**
* api.js
*/
export function submit(data) {
 return fetch(
   '/api/birthday',
   {
     method: 'POST',
     body: JSON.stringify(data)
    }
  )
   .then(response => reponse.json())
   .catch(console.error)
}`;
