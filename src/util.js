export function nest(data, parentId = 0) {
  return data.reduce((r, e) => {
    let obj = Object.assign({}, e)
    if (parentId == e.parentID) {
      let comments = nest(data, e.commentID)
      if (comments.length) obj.comments = comments
      r.push(obj)
    }
    return r;
  }, [])
}