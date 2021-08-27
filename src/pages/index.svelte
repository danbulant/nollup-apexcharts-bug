<script>
    import { metatags } from '@roxi/routify'
    import { chart } from "../chart";
    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'

    var opts = {};
</script>

<div use:chart={opts} />