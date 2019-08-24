export function logging() { console.log("model successfully loaded") };

export let poses = new Object;

export function uploadtodb(pose) {
  firebase.database().ref("bat").set(pose);
}
