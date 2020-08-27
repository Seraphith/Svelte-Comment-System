<script>
	import Navigation from "./Navigation.svelte";
	import Comments from "./Comments.svelte";
	import { nest } from './util.js'


	let comments = nest([
		{
			username: "John Doe",
			commentID: 1,
			parentID: 0,
			comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
		},
		{
			username: "Bob Dylan",
			commentID: 2,
			parentID: 0,
			comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
		},
		{
			username: "Bruce Spring",
			commentID: 3,
			parentID: 0,
			comment: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
		},
		{
			username: "Robert Wilson",
			commentID: 4,
			parentID: 1,
			comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium?"
		},
		{
			username: "Lary",
			commentID: 5,
			parentID: 4,
			comment: "Temporibus autem quibusdam et aut officiis."
		}

	]);


</script>

<Navigation />

<div class="wrapper">
<Comments {comments} />
</div>

<style>

.wrapper {
    width:720px;
    margin:auto;
    border: 3px solid lightgrey;
	padding-right:20px;
  }

</style>