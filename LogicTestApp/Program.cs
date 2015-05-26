using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.NetworkInformation;

namespace LogicTestApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            List<string> sites = new List<string> { "www.aspsnippets.com", "www.asp.net", "www.microsoft.com", "forums.asp.net", "www.silverlight.net" };

            List<PingReply> pingReplies = new List<PingReply>();
            System.Threading.Tasks.Parallel.ForEach(sites, site =>
            {
                Ping p = new Ping();
                lock (pingReplies)
                {
                    pingReplies.Add(p.Send(site));
                }
            });

            Console.WriteLine("Generating Fibonacci Series");

            int val1 = 0;
            Console.WriteLine(val1);

            int a = 0, b = 1, sum = 0;
            for (int i = 1; i <= 50; i++)
            {
                sum = a + b;
                a = b;
                b = sum;
                Console.WriteLine(a);
            }

            Console.ReadLine();

            int A = 10, B = 20;
            float F1 = 3.5F, F2 = 5.5F;
            string S1 = "Naresh", S2 = "Microsoft";

            //Calling generic method using int types variables
            Swap<int>(ref A, ref B);

            //Calling genrics method using float type variables
            Swap<float>(ref F1, ref F2);

            //Calling genric method using string variables
            Swap<string>(ref S1, ref S2);

            Console.WriteLine("After Swap ...");
            Console.WriteLine("A = {0}\tB = {1}", A, B);
            Console.WriteLine("F1 = {0}\tF2 = {1}", F1, F2);
            Console.WriteLine("S1 = {0}\tS2 = {1}", S1, S2);

        }

        public static void Swap<Wahid>(ref Wahid X, ref Wahid Y)
        {
            Wahid T;
            T = X;
            X = Y;
            Y = T;
        }


    }

    public class Customer
    {
        public int AddCustomer(string Name, string City, string State)
        {
            return 1;
        }
    }
}
