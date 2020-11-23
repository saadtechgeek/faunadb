var faunadb = require('faunadb'),
  q = faunadb.query;

(async()=>{
    var adminClient = new faunadb.Client({ secret: 'fnAD6RHAtSACAX6OleNsXRtsp7mDPh_5Zvwe8vqd' });

    try{
        const result = await adminClient.query(

            //q.CreateDatabase({ name: 'tempdb' })

            // q.CreateKey({
            //     database: q.Database('tempdb'),
            //     role: 'admin',
            //   })

            // q.CreateCollection({ name: 'messages' })

            // q.CreateIndex({
            //     name: 'detail_by_title',
            //     source: q.Collection('messages'),
            //     terms: [{ field: ['data', 'detail'] }],
            //   })

            // q.Create(
            //     q.Collection('messages'),
            //     { data: { detail: 'I am fine!'} },
            //   )

           // multiple data at the same time.
            // q.Map(
            //     [
            //       'This is message 1',
            //       'Message 2',
            //       'Reply for message 1 & 2',
            //     ],
            //     q.Lambda(
            //       'detail',
            //       q.Create(
            //         q.Collection('messages'),
            //         { data: { title: q.Var('detail') } },
            //       )
            //     ),
            //   )

            // if you know the id
            //q.Get(q.Ref(q.Collection('messages'), '281776761050497543'))

            // q.Get(q.Match(q.Index('detail_by_title'), "I am fine!"))

            // q.Update(
            //     q.Ref(q.Collection('messages'), '281776761050497543'),
            //     { data: { detail: "I am sick!" } },
            //   )

            // naya document hamare pass banh jaie.!!
            // q.Replace(
            //     q.Ref(q.Collection('messages'), '281776761050497543'),
            //     { data: { detail: "I am Good Now!" } },
            //   )

            // q.Delete(
            //     q.Ref(q.Collection('messages'), '281776761050497543')
            //   )

          );
        console.log(result);
    } catch(err){
        console.log(err);
    }

})();