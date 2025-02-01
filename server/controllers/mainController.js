exports.homepage = async (req, res) => {
  const locals = {
    title: "لذه | الصفحة الرئيسية",
  }
  res.render('homePage', {
    locals,
    layout: '../views/layouts/front-page'
  });
}



exports.SearchPage = async (req, res) => {
  const locals = {
    title: "لذه | البحث",
  }
  res.render('SearchPage', {
    locals,
    layout: '../views/layouts/front-page'
  });
}