function(doc) {
  if (doc.type == "comment") {
    emit([doc.linkid, doc._local_seq], doc);
  }
}