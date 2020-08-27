<script>
	export let comments = [];

    let postReply = false;
    const toggleReply = () => (postReply = !postReply);
</script>

<style>
  .container {
    margin-left: 15px;
    margin-top: 20px;
  }
  h3 {
    color: grey;
    font-size: 0.9em;
  }
  .comment {
    border: 1px solid lightgrey;
    padding:5px;
  }
  .comment textarea{
		width:80%;
		height:100px;
	}
</style>


{#each comments as comment}
  <div class="container">
    
    <div class="comment">
      <h3>{comment.username}</h3>
      {@html comment.comment}

      {#if !postReply}
      <br><br><button on:click={toggleReply}>Reply</button>
      {/if}
  
      {#if postReply}
      <textarea></textarea>
      <button>Post</button>
      <button on:click={toggleReply}>Cancel</button>
      {/if}


    </div>
    <svelte:self comments={comment.comments} />
  </div>
{/each}