<script>
  // @ts-ignore
  import axios from 'axios'
  import { onMount } from 'svelte';
  let future = ""

  onMount(() => {
    axios.get("http://localhost:3000/api/data").then((res) => {
      console.log(res)
      future = res.data
    })
    console.log("bhaskar")
  })
</script>

<div>
  <div>
    This will be rendered from EC2 later on 
  </div>

  <div>
    ... {future}
  </div>
</div>

