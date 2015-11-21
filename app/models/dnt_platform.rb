class DntPlatform < ActiveRecord::Base
  # include Segmentable
  
  # belongs_to :segment

  validates :desktop_accepted_flag, presence: true,length: { maximum: 1 }
  validates :mobile_accepted_flag, presence: true, length: { maximum: 1 }
  validates :tablet_accepted_flag, presence: true, length: { maximum: 1 }            
  validates :connected_tv_accepted_flag, presence: true, length: { maximum: 1 }            
end
