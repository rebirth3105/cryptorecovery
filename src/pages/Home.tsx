import { useState } from 'react';
import { Link } from 'react-router';
import { 
  Shield, 
  Clock, 
  Users, 
  ChevronRight, 
  Send, 
  CheckCircle2,
  Wallet,
  FileQuestion,
  LifeBuoy
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! Our team will contact you shortly.');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">CryptoRecover</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="font-medium hover:text-blue-600 transition">Home</Link>
            <Link to="#services" className="font-medium hover:text-blue-600 transition">Services</Link>
            <Link to="#how-it-works" className="font-medium hover:text-blue-600 transition">How It Works</Link>
            <Link to="#testimonials" className="font-medium hover:text-blue-600 transition">Success Stories</Link>
            <Link to="#faq" className="font-medium hover:text-blue-600 transition">FAQ</Link>
          </nav>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Start Recovery</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Recover Your Lost Crypto Investments</h1>
              <p className="text-lg mb-8 text-gray-700">
                We specialize in helping victims of cryptocurrency fraud and technical losses recover their funds. Our expert team has helped recover millions in digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg">Get Help Now</Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://pub-cdn.sider.ai/u/U0JJH4671RG/web-coder/684cc314060d7d85c714e427/resource/9e4d345b-7f34-4a75-be5b-677b3bf7696a.webp" 
                alt="Crypto Recovery" 
                className="rounded-lg shadow-xl object-cover" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-green-600 text-lg">$15M+</p>
                <p className="text-sm text-gray-600">Recovered for our clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Wallet className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">$15M+</h3>
                <p className="text-gray-600">Recovered Funds</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">85%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Recovery Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer specialized services to help you recover lost cryptocurrency funds through various scenarios.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>Scam & Fraud Recovery</CardTitle>
                  <CardDescription>Help for victims of investment scams, fake exchanges, and fraudulent schemes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our team specializes in tracking and recovering funds from scammers who operate fake investment platforms, fraudulent exchanges, and Ponzi schemes in the crypto space.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">Learn More</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <FileQuestion className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Wallet Access Recovery</CardTitle>
                  <CardDescription>Solutions for lost keys, passwords, and compromised wallets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We provide technical assistance to recover access to wallets with lost keys or passwords, and help secure compromised wallets to prevent further losses.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">Learn More</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <LifeBuoy className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Exchange Dispute Resolution</CardTitle>
                  <CardDescription>Help with frozen accounts and disputed transactions on exchanges</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our experts work with cryptocurrency exchanges to resolve disputes, unfreeze accounts, and recover funds from transactions that were incorrectly processed.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How Our Recovery Process Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've developed a methodical approach to maximize your chances of recovering lost crypto funds.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 relative">
                  <span className="text-xl font-bold">1</span>
                  <div className="absolute w-16 h-1 bg-blue-200 right-[-100%] top-1/2 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                <p className="text-gray-600">
                  We assess your case details and determine if recovery is possible.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 relative">
                  <span className="text-xl font-bold">2</span>
                  <div className="absolute w-16 h-1 bg-blue-200 right-[-100%] top-1/2 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Investigation</h3>
                <p className="text-gray-600">
                  Our experts trace your funds and identify recovery pathways.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 relative">
                  <span className="text-xl font-bold">3</span>
                  <div className="absolute w-16 h-1 bg-blue-200 right-[-100%] top-1/2 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Recovery Action</h3>
                <p className="text-gray-600">
                  We implement technical and legal solutions to recover your assets.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Return</h3>
                <p className="text-gray-600">
                  Your recovered funds are returned to your secure wallet.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg">
                Start Your Recovery Process
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from clients who successfully recovered their crypto assets with our help.
              </p>
            </div>
            
            <Tabs defaultValue="story1" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="story1">Investment Scam</TabsTrigger>
                <TabsTrigger value="story2">Exchange Issue</TabsTrigger>
                <TabsTrigger value="story3">Wallet Recovery</TabsTrigger>
              </TabsList>
              <TabsContent value="story1" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                          <img src="https://pub-cdn.sider.ai/u/U0JJH4671RG/web-coder/684cc314060d7d85c714e427/resource/6bdd7fdf-50a6-4373-aea2-c0bb7e2855bd.jpg" alt="Client" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg italic mb-4">
                          "I lost over $50,000 to what I thought was a legitimate crypto trading platform. After months of no withdrawals, I realized I'd been scammed. CryptoRecover's team traced my funds across multiple wallets and managed to recover 70% of my investment. Their expertise was incredible."
                        </p>
                        <div>
                          <p className="font-bold">Michael T.</p>
                          <p className="text-sm text-gray-600">Investment Scam Victim</p>
                          <div className="flex mt-2">
                            <p className="text-green-600 font-bold">$35,000 recovered</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="story2" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                          <img src="https://pub-cdn.sider.ai/u/U0JJH4671RG/web-coder/684cc314060d7d85c714e427/resource/e63e6461-5a23-4097-a6e3-7ba0406a07fd.jpg" alt="Client" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg italic mb-4">
                          "My exchange account with $80,000 in crypto was suddenly frozen without explanation. After weeks of no response from their support, I contacted CryptoRecover. Their team established communication channels with the exchange's legal department and got my account restored within 3 weeks."
                        </p>
                        <div>
                          <p className="font-bold">Sarah K.</p>
                          <p className="text-sm text-gray-600">Exchange Dispute Client</p>
                          <div className="flex mt-2">
                            <p className="text-green-600 font-bold">Full account access recovered</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="story3" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                          <img src="https://pub-cdn.sider.ai/u/U0JJH4671RG/web-coder/684cc314060d7d85c714e427/resource/a17cefae-c10d-465a-80d8-50d54949e285.jpg" alt="Client" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg italic mb-4">
                          "I thought I'd lost my life savings when my hardware wallet stopped working and I couldn't remember my seed phrase. CryptoRecover's technical team was able to extract the private keys from my damaged device and recover all 3.5 BTC. Their technical knowledge saved me from financial disaster."
                        </p>
                        <div>
                          <p className="font-bold">David L.</p>
                          <p className="text-sm text-gray-600">Wallet Recovery Client</p>
                          <div className="flex mt-2">
                            <p className="text-green-600 font-bold">3.5 BTC recovered</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our crypto recovery services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    <span>Can all lost cryptocurrency be recovered?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="pl-6 text-gray-600">
                    Not all lost crypto can be recovered. Recovery success depends on the specific circumstances of the loss, how much time has passed, and whether the funds can be traced. During our free consultation, we'll assess your case and provide an honest evaluation of recovery chances.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    <span>How much does your service cost?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="pl-6 text-gray-600">
                    We operate on a contingency fee basis for most cases - meaning we only charge a percentage of successfully recovered funds. The exact percentage depends on the complexity of your case and the amount involved. We provide transparent fee information during the consultation phase.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    <span>How long does the recovery process take?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="pl-6 text-gray-600">
                    Recovery timeframes vary widely depending on the case complexity. Simple wallet recovery may take days, while complex fraud cases involving legal action could take months. We provide estimated timeframes based on your specific situation during the initial assessment.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    <span>Is my information kept confidential?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="pl-6 text-gray-600">
                    Absolutely. We maintain strict confidentiality regarding all client information and case details. We use enterprise-grade security measures to protect your data, and we never share your information with third parties without your explicit consent.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    <span>Do you provide preventative security consulting?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="pl-6 text-gray-600">
                    Yes, we offer security consultations to help prevent future losses. After a recovery case, we provide recommendations for secure storage practices, exchange vetting, and fraud prevention strategies tailored to your specific investment habits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to Recover Your Funds?</h2>
                <p className="text-xl mb-8">
                  Our team is standing by to evaluate your case and begin the recovery process. Contact us now for a free consultation.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-300" />
                    <span>No recovery, no fee for most cases</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-300" />
                    <span>Confidential case evaluation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-300" />
                    <span>Experienced recovery specialists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-300" />
                    <span>Transparent process and pricing</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>Fill out the form below for a free case evaluation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="Your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="lossType" className="text-sm font-medium text-gray-700">Type of Loss</label>
                        <select 
                          id="lossType" 
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          required
                        >
                          <option value="">Select type of loss</option>
                          <option value="scam">Investment Scam</option>
                          <option value="exchange">Exchange Issue</option>
                          <option value="wallet">Wallet Access Problem</option>
                          <option value="hack">Hack or Theft</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="amount" className="text-sm font-medium text-gray-700">Approximate Loss Amount (USD)</label>
                        <Input id="amount" type="text" placeholder="e.g. $10,000" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Case Details</label>
                        <Textarea 
                          id="message" 
                          placeholder="Please briefly describe what happened..." 
                          className="min-h-[120px]"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        <Send className="mr-2 h-4 w-4" /> Submit Case for Review
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl text-white">CryptoRecover</span>
              </div>
              <p className="mb-4">
                Specialized in recovering lost cryptocurrency investments through expert investigation and recovery techniques.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Scam Recovery</a></li>
                <li><a href="#" className="hover:text-white transition">Wallet Access</a></li>
                <li><a href="#" className="hover:text-white transition">Exchange Disputes</a></li>
                <li><a href="#" className="hover:text-white transition">Security Consulting</a></li>
                <li><a href="#" className="hover:text-white transition">Legal Assistance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Scam Database</a></li>
                <li><a href="#" className="hover:text-white transition">Security Tips</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li>support@cryptorecover.com</li>
                <li>+1 (800) 555-1234</li>
                <li>123 Blockchain Street</li>
                <li>Suite 456</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 CryptoRecover. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
