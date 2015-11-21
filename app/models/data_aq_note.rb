class DataAqNote < ActiveRecord::Base
  include Segmentable   
  belongs_to :segment    
end
