using System;
using System.Windows.Forms;

namespace ClassAndInstance
{
    class Program
    {
        public static void Main(string[] args)
        {
            (new Form()).Text = "MyForm";
            (new Form()).ShowDialog();
        }
    }
}