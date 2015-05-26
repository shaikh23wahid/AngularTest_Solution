using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AngularTest
{
    public partial class About : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
               // Response.Redirect("Default.aspx", false);
                int x = 0;
                int y = 10;
                int z = y / x;
            }
            catch (Exception ex)
            {
                Response.Redirect("tutorial.html", false);
            }
            finally { Response.Redirect("Default.aspx", false); }
        }
    }
}
